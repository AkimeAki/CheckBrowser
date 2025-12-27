export type BrowserName =
	| "chrome"
	| "firefox"
	| "ie"
	| "edge"
	| "old-edge"
	| "opera"
	| "samsung"
	| "line"
	| "safari"
	| null;

export type RenderingType =
	| "webkit"
	| "chromium"
	| "gecko"
	| "trident"
	| "edgehtml"
	| null;

export type OSName = "windows" | "mac" | "ios" | "android" | "linux" | null;

export interface BrowserInfo {
	browser: BrowserName;
	renderingType: RenderingType;
	os: OSName;
	version: number | null;
}

const checkBrowser = () => {
	const agent = window.navigator.userAgent.toLowerCase();
	const data: BrowserInfo = {
		browser: null,
		renderingType: null,
		os: null,
		version: null,
	};

	if (agent.includes("windows")) {
		data.os = "windows";
	} else if (agent.includes("mac") && agent.includes("os")) {
		if (
			agent.includes("iphone") ||
			agent.includes("ipad") ||
			agent.includes("ipod")
		) {
			data.os = "ios";
		} else {
			data.os = "mac";
		}
	} else if (agent.includes("android")) {
		data.os = "android";
	} else if (
		agent.includes("linux") ||
		agent.includes("sunos") ||
		agent.includes("bsd")
	) {
		data.os = "linux";
	}

	if (agent.includes("msie") || agent.includes("trident")) {
		data.browser = "ie";
		data.renderingType = "trident";
	} else if (agent.includes("edge")) {
		data.browser = "old-edge";
		data.renderingType = "edgehtml";
	} else if (agent.includes("edg")) {
		data.browser = "edge";
		data.renderingType = "chromium";
		const match = agent.match(/edg\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("opr")) {
		data.browser = "opera";
		data.renderingType = "chromium";
		const match = agent.match(/opr\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("samsungbrowser") && data.os === "android") {
		data.browser = "samsung";
		data.renderingType = "chromium";
		const match = agent.match(/samsungbrowser\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("line") && data.os === "android") {
		data.browser = "line";
		data.renderingType = "chromium";
		const match = agent.match(/line\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("crios")) {
		data.browser = "chrome";
		data.renderingType = "webkit";
	} else if (agent.includes("fxios")) {
		data.browser = "firefox";
		data.renderingType = "webkit";
	} else if (agent.includes("edgios")) {
		data.browser = "edge";
		data.renderingType = "webkit";
	} else if (agent.includes("chrome")) {
		data.browser = "chrome";
		data.renderingType = "chromium";
		const match = agent.match(/chrome\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("safari")) {
		data.browser = "safari";
		data.renderingType = "webkit";

		const match = agent.match(/version\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("firefox")) {
		data.browser = "firefox";
		data.renderingType = "gecko";
		const match = agent.match(/firefox\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	}

	return data;
};

export default checkBrowser;
