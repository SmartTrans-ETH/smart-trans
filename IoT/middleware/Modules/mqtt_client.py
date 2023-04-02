import time
from umqtt.simple import MQTTClient


class MQTT:
    def __init__(self, client_id, server, port, user, password, keepalive, ssl, ssl_params, topic):
        self.client_id = client_id
        self.server = server
        self.port = port
        self.user = user
        self.password = password
        self.keepalive = keepalive
        self.ssl = ssl
        self.ssl_params = ssl_params
        self.topic = topic
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

    def publish(self, msg):
        self.client.publish(self.topic, msg)
        print("Published: " + str(msg))
        time.sleep(2)

    def set_callback(self, callback_function):
        self.client.set_callback(callback_function)

    def wait_message(self):
        self.client.wait_msg()

    def subscribe(self):
        self.client.subscribe(self.topic)
        print("Subscribed: " + str(self.topic))

    def disconnect(self):
        self.client.disconnect()

    def check_msg(self):
        self.client.check_msg()