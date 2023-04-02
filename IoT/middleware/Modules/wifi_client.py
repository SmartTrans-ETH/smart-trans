import network
from time import sleep

class WifiClient:
    def __init__(self, ssid, password):
        self.ssid = ssid
        self.password = password

    def connect(self):
        wlan = network.WLAN(network.STA_IF)
        wlan.active(True)
        wlan.connect(self.ssid, self.password)
        ip = wlan.ifconfig()[0]
        while wlan.isconnected() == False:
            print('Waiting for connection...')
            sleep(1)
        print(f'Connected on {ip}')
        return (ip)
        
# WC = WifiClient('Alquimistas1', '12345678')