function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "ff.garena.com") || dnsDomainIs(host, "garena.com")) {
        return "PROXY proxy.api.xcloud.workers.dev:443; DIRECT";
    }
    return "DIRECT";
}