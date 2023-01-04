
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ACSvcPort: string;
	export const add_path: string;
	export const aliases: string;
	export const ALLUSERSPROFILE: string;
	export const ANSICON: string;
	export const ANSICON_DEF: string;
	export const APPDATA: string;
	export const architecture: string;
	export const architecture_bits: string;
	export const ccall: string;
	export const cexec: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const CMDER_ALIASES: string;
	export const CMDER_CLINK: string;
	export const CMDER_CONFIGURED: string;
	export const CMDER_INIT_END: string;
	export const CMDER_INIT_START: string;
	export const CMDER_ROOT: string;
	export const CMDER_SHELL: string;
	export const CMDER_USER_FLAGS: string;
	export const COLOR: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const ConEmuANSI: string;
	export const ConEmuAnsiLog: string;
	export const ConEmuArgs: string;
	export const ConEmuArgs2: string;
	export const ConEmuBackHWND: string;
	export const ConEmuBaseDir: string;
	export const ConEmuBaseDirShort: string;
	export const ConEmuBuild: string;
	export const ConEmuCfgDir: string;
	export const ConEmuConfig: string;
	export const ConEmuDir: string;
	export const ConEmuDrawHWND: string;
	export const ConEmuDrive: string;
	export const ConEmuHooks: string;
	export const ConEmuHWND: string;
	export const ConEmuPalette: string;
	export const ConEmuPID: string;
	export const ConEmuServerPID: string;
	export const ConEmuTask: string;
	export const ConEmuWorkDir: string;
	export const ConEmuWorkDrive: string;
	export const CUDA_PATH: string;
	export const CUDA_PATH_V11_2: string;
	export const debug_output: string;
	export const depth: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const fast_init: string;
	export const feFlagName: string;
	export const find_query: string;
	export const found: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const git_executable: string;
	export const GIT_INSTALL_ROOT: string;
	export const git_locale: string;
	export const GIT_VERSION_USER: string;
	export const GIT_VERSION_VENDORED: string;
	export const GPU_FORCE_64BIT_PTR: string;
	export const GPU_MAX_ALLOC_PERCENT: string;
	export const GPU_MAX_HEAP_SIZE: string;
	export const GPU_SINGLE_ALLOC_PERCENT: string;
	export const GPU_USE_SYNC_OBJECTS: string;
	export const HAXEPATH: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const INTEL_DEV_REDIST: string;
	export const JAVA_HOME: string;
	export const LANG: string;
	export const LIB: string;
	export const lib_base: string;
	export const lib_console: string;
	export const lib_git: string;
	export const lib_path: string;
	export const lib_profile: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const LUA_DEV: string;
	export const LUA_PATH: string;
	export const max_depth: string;
	export const MIC_LD_LIBRARY_PATH: string;
	export const NEKO_INSTPATH: string;
	export const nix_tools: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_engine_strict: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OLD_PATH: string;
	export const OneDrive: string;
	export const OPENAI_API_KEY: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const path_position: string;
	export const PLINK_PROTOCOL: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const QTDIR: string;
	export const QtMsBuild: string;
	export const RlsSvcPort: string;
	export const SESSIONNAME: string;
	export const SVN_SSH: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM: string;
	export const time_init: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const user_aliases: string;
	export const USER_BUILD: string;
	export const USER_MAJOR: string;
	export const USER_MINOR: string;
	export const USER_PATCH: string;
	export const VENDORED_BUILD: string;
	export const VENDORED_MAJOR: string;
	export const VENDORED_MINOR: string;
	export const VENDORED_PATCH: string;
	export const verbose_output: string;
	export const VK_SDK_PATH: string;
	export const VULKAN_SDK: string;
	export const windir: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ACSvcPort: string;
		add_path: string;
		aliases: string;
		ALLUSERSPROFILE: string;
		ANSICON: string;
		ANSICON_DEF: string;
		APPDATA: string;
		architecture: string;
		architecture_bits: string;
		ccall: string;
		cexec: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		CMDER_ALIASES: string;
		CMDER_CLINK: string;
		CMDER_CONFIGURED: string;
		CMDER_INIT_END: string;
		CMDER_INIT_START: string;
		CMDER_ROOT: string;
		CMDER_SHELL: string;
		CMDER_USER_FLAGS: string;
		COLOR: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		ConEmuANSI: string;
		ConEmuAnsiLog: string;
		ConEmuArgs: string;
		ConEmuArgs2: string;
		ConEmuBackHWND: string;
		ConEmuBaseDir: string;
		ConEmuBaseDirShort: string;
		ConEmuBuild: string;
		ConEmuCfgDir: string;
		ConEmuConfig: string;
		ConEmuDir: string;
		ConEmuDrawHWND: string;
		ConEmuDrive: string;
		ConEmuHooks: string;
		ConEmuHWND: string;
		ConEmuPalette: string;
		ConEmuPID: string;
		ConEmuServerPID: string;
		ConEmuTask: string;
		ConEmuWorkDir: string;
		ConEmuWorkDrive: string;
		CUDA_PATH: string;
		CUDA_PATH_V11_2: string;
		debug_output: string;
		depth: string;
		DriverData: string;
		EDITOR: string;
		fast_init: string;
		feFlagName: string;
		find_query: string;
		found: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		git_executable: string;
		GIT_INSTALL_ROOT: string;
		git_locale: string;
		GIT_VERSION_USER: string;
		GIT_VERSION_VENDORED: string;
		GPU_FORCE_64BIT_PTR: string;
		GPU_MAX_ALLOC_PERCENT: string;
		GPU_MAX_HEAP_SIZE: string;
		GPU_SINGLE_ALLOC_PERCENT: string;
		GPU_USE_SYNC_OBJECTS: string;
		HAXEPATH: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		INTEL_DEV_REDIST: string;
		JAVA_HOME: string;
		LANG: string;
		LIB: string;
		lib_base: string;
		lib_console: string;
		lib_git: string;
		lib_path: string;
		lib_profile: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		LUA_DEV: string;
		LUA_PATH: string;
		max_depth: string;
		MIC_LD_LIBRARY_PATH: string;
		NEKO_INSTPATH: string;
		nix_tools: string;
		NODE: string;
		NODE_ENV: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_engine_strict: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OLD_PATH: string;
		OneDrive: string;
		OPENAI_API_KEY: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		path_position: string;
		PLINK_PROTOCOL: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		QTDIR: string;
		QtMsBuild: string;
		RlsSvcPort: string;
		SESSIONNAME: string;
		SVN_SSH: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM: string;
		time_init: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		user_aliases: string;
		USER_BUILD: string;
		USER_MAJOR: string;
		USER_MINOR: string;
		USER_PATCH: string;
		VENDORED_BUILD: string;
		VENDORED_MAJOR: string;
		VENDORED_MINOR: string;
		VENDORED_PATCH: string;
		verbose_output: string;
		VK_SDK_PATH: string;
		VULKAN_SDK: string;
		windir: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
