
#version 300 es

precision highp float;
precision highp int;

out vec4 pc_fragColor;

in vec3	vColor;

void main() {

	vec3 color = vColor;

	pc_fragColor = vec4(color, 1.0);
}


