import json
import machine
from Modules import mqtt_client


class Middleware:

    def __init__(self):
        self.MC = mqtt_client.MQTT(
            client_id=b"henriquemarlon",
            server=b"3f0dc5167c844b77b7cc1ad73cb41782.s2.eu.hivemq.cloud",
            port=0,
            user="henriquemarlon",
            password="@Lux31415",
            keepalive=7200, ssl=True,
            ssl_params={
                'server_hostname': '3f0dc5167c844b77b7cc1ad73cb41782.s2.eu.hivemq.cloud'},
            topic="response"
        )

    def routine(self):
        def callback(topic, msg):
            view = int(msg.decode("utf-8"))
            print(view)
            if view == 1:
                led_1 = machine.Pin(15, machine.Pin.OUT)
                led_1.on()
                led_2 = machine.Pin(16, machine.Pin.OUT)
                led_2.off()
            elif view == 0:
                led_1 = machine.Pin(15, machine.Pin.OUT)
                led_1.off()
                led_2 = machine.Pin(16, machine.Pin.OUT)
                led_2.on()
                buser = machine.Pin(17, machine.Pin.OUT)
                buser.on()
        self.MC.set_callback(callback)
        self.MC.connect()
        self.MC.subscribe()

        while True:
            self.MC.wait_message()


MW = Middleware()

if __name__ == '__main__':
    while True:
        MW.routine()


# import time
# import machine
# import json
# from Modules import mqtt_client, hbridge

# class Routine:

#     def __init__(self):
#         self.HB = hbridge.HBridge(2, 1, 4, 5)
#         self.MC = mqtt_client.MqttClient(f'raspberry-pub-{time.time_ns()}', "192.168.4.17", 1883, "raspberry/mqtt")

#     def routine(self):

#         def callback(topic, msg):
#             msg = json.loads(msg)
#             print(msg)
#             if msg['msg'] == 1:
#                 self.HB.enable_first_component()
#             elif msg['msg'] == 0:
#                 self.HB.disable_first_component()
#         self.MC.set_calback(callback)
#         try:
#             self.MC.connect()
#             self.MC.subscribe()
#         except OSError as e:
#             print("Error: " + str(e))
#             machine.reset()
#         else:
#             while True:
#                  self.MC.wait_message()

# routine = Routine()

# if __name__ == '__main__':
#     routine.routine()
