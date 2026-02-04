
#version 300 es

precision mediump float;
precision mediump int;

in vec3 position;
in vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

out vec2 vUv;

void main() {
	vUv = uv;

	vec4 mvPosition = modelViewMatrix * vec4(position,1.0);

	gl_Position = projectionMatrix * mvPosition;
}
