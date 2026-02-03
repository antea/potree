
#version 300 es

precision mediump float;
precision mediump int;

out vec4 pc_fragColor;

in vec3 vColor;
in float vLinearDepth;

void main() {

	//pc_fragColor = vec4(1.0, 0.0, 0.0, 1.0);
	//pc_fragColor = vec4(vColor, 1.0);
	//pc_fragColor = vec4(vLinearDepth, pow(vLinearDepth, 2.0), 0.0, 1.0);
	pc_fragColor = vec4(vLinearDepth, vLinearDepth / 30.0, vLinearDepth / 30.0, 1.0);

}


