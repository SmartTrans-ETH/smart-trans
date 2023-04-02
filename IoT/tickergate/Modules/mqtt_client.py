import time
from umqtt.simple import MQTTClient


class MQTT:
    def __init__(self, client_id, server, port, user, password, keepalive, ssl, ssl_params):
        self.client_id = client_id
        self.server = server
        self.port = port
        self.user = user
        self.password = password
        self.keepalive = keepalive
        self.ssl = ssl
        self.ssl_params = ssl_params
        self.client = MQTTClient(client_id=self.client_id,
                                 server=self.server,
                                 port=self.port,
                                 user=self.user,
                                 password=self.password,
                                 keepalive=self.keepalive,
                                 ssl=self.ssl,
                                 ssl_params=self.ssl_params
                                 )

    def connect(self):
        self.client.connect()

    def publish(self, topic, msg):
        self.client.publish(topic, msg)
        print("Published: " + str(msg))
        time.sleep(2)

    def set_callback(self, callback):
        self.client.set_callback(callback)

    def wait_message(self):
        self.client.wait_msg()

    def subscribe(self, topic):
        self.client.subscribe(topic)
        print("Subscribed: " + str(topic))

    def disconnect(self):
        self.client.disconnect()


CM = MQTT(
    client_id=b"henriquemarlon",
    server=b"3f0dc5167c844b77b7cc1ad73cb41782.s2.eu.hivemq.cloud",
    port=0,
    user="henriquemarlon",
    password="@Lux31415",
    keepalive=7200, ssl=True,
    ssl_params={
        'server_hostname': '3f0dc5167c844b77b7cc1ad73cb41782.s2.eu.hivemq.cloud'}
)
