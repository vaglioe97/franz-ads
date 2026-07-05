"use client"

import { useEffect, useRef } from "react"

/**
 * Fondo WebGL del hero: niebla fractal neutra (gris azulado) con
 * destellos dorados y azules a la deriva — atmosférico, high-ticket.
 * Adaptado del shader de Matthias Hurrle (@atzedent) a la paleta
 * del sitio. Anima siempre (petición explícita del cliente), se
 * pausa fuera del viewport y renderiza a media resolución.
 */
const FRAGMENT = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN;
  vec2 st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.35,-st.y));
  uv*=1.-.3*(sin(T*.15)*.5+.5);
  for(float i=1.;i<10.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.35+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    vec3 tint=mix(vec3(1.,.85,.45),vec3(.45,.65,1.),.5+.5*sin(i*1.7));
    col+=.0012/d*tint;
    float b=noise(i+p+bg*1.731);
    col+=.0015*b/length(max(p,vec2(b*p.x*.02,p.y)));
    /* niebla neutra gris-azulada — el dorado queda solo en los destellos */
    col=mix(col,vec3(bg*.085,bg*.10,bg*.135)+vec3(.004,.010,.028)*d,d);
  }
  O=vec4(col*.9,1);
}`

const VERTEX = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`

export function ShaderHero({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      return sh
    }
    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return

    gl.useProgram(program)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    const uResolution = gl.getUniformLocation(program, "resolution")
    const uTime = gl.getUniformLocation(program, "time")

    let raf = 0
    let visible = true

    const draw = (timeSec: number) => {
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, timeSec)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    const render = (now: number) => {
      draw(now * 1e-3)
      raf = requestAnimationFrame(render)
    }

    const resize = () => {
      // media resolución: el desenfoque natural favorece la atmósfera
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) {
        visible = true
        raf = requestAnimationFrame(render)
      } else if (!entry.isIntersecting && visible) {
        visible = false
        cancelAnimationFrame(raf)
      }
    })
    io.observe(canvas)

    resize()
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
