import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { env } from 'process'
import path from 'path';
import createVitePlugins from './plugins';

export default defineConfig((mode,command)=>{
	const env = loadEnv(mode,process.cwd());
	return{
		resolve:{
			alias:{
				//设置路径
				'~':path.resolve(__dirname,'./'),
				//设置别名
				'@':path.resolve(__dirname,'./src')
			},
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
		},
		base: './',
		plugins: createVitePlugins(env,command === 'build'),
		server : {
		  port: env.VITE_PORT,
		  host:	true,
		  open:	env.VITE_OPEN,
		},
	}
})
