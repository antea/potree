
import * as THREE from "three";
import {Shaders} from "../../build/shaders/shaders.js";
import {Utils} from "../utils";

export class NormalizationMaterial extends THREE.RawShaderMaterial{

	constructor(parameters = {}){
		super({glslVersion: THREE.GLSL3});

		let uniforms = {
			uDepthMap:		{ type: 't', value: null },
			uWeightMap:		{ type: 't', value: null },
		};

        const {fs, vs} = Utils.addDefinesToFsAndVs(
            Shaders['normalize.fs'],
            Shaders['normalize.vs'],
            this.getDefines());

		this.setValues({
			uniforms: uniforms,
			vertexShader: vs,
			fragmentShader: fs,
		});
	}

	getDefines() {
		let defines = '';

		return defines;
	}

	updateShaderSource() {

        const {fs, vs} = Utils.addDefinesToFsAndVs(
            Shaders['normalize.fs'],
            Shaders['normalize.vs'],
            this.getDefines())

		this.setValues({
			vertexShader: vs,
			fragmentShader: fs
		});

		this.needsUpdate = true;
	}

}

