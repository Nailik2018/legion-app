export class Computer {
    computerInformations: {
        id: string;
        cpuModel: string;
        cpuCores: string;
        cpuTemperature: string;
        cpuCurrentFrequence: string;
        cpuMaxFrequence: string;
        cpuMinFrequence: string;
        ramTotal: number;
        ramUsed: number;
        ramFree: number;
        storageTotal: number;
        storageUsed: number;
        storageFree: number;
        operatingSystem: string;
        lanMacAddress: string;
        wlanMacAddress: string;
        ssid: string;
        lanIpAddress: string;
        wlanIpAddress: string;
        phpVersion: string;
        databaseTyp: string;
        databaseVersion: string;
        webserverTyp: string;
        webserverVersion: string;
        lastUpdateTime: string;
    }
    cpuSVG: string;
    ramSVG: string;
    storageSVG: string;
    systemSVG: string;
    networkSVG: string;
    softwareSVG: string;
}
