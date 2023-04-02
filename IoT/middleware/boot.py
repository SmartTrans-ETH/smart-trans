from Modules import wifi_client
import machine
import gc
gc.collect()

class Network:
    def __init__(self):
        self.AP = wifi_client.WifiClient('Ethsamba', 'Ethsamba23')

    def accessing_network(self):
        self.AP.connect()

if __name__ == '__main__':
    network = Network()
    try:
        network.accessing_network()
        led = machine.Pin("LED", machine.Pin.OUT)
        led.on()
    except Exception as e:
        machine.reset()
        print(e)