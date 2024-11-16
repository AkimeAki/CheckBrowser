declare const checkBrowser: () => {
    browser: string;
    type: string;
    os: string;
    version: null | number;
};
export default checkBrowser;
