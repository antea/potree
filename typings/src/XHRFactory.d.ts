export namespace XHRFactory {
    namespace config {
        const withCredentials: boolean;
        const customHeaders: {
            header: any;
            value: any;
        }[];
    }

    function createXMLHttpRequest(): XMLHttpRequest;
}
