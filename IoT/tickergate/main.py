from micropython_mfrc522.mfrc522 import MFRC522
from Modules import mqtt_client
from machine import Pin
import utime


class Rfid:
    def __init__(self):
        self.MC = mqtt_client.MQTT(
            client_id=b"henriquemarlon",
            server=b"3f0dc5167c844b77b7cc1ad73cb41782.s2.eu.hivemq.cloud",
            port=0,
            user="henriquemarlon",
            password="@Lux31415",
            keepalive=7200, ssl=True,
            ssl_params={
                'server_hostname': '3f0dc5167c844b77b7cc1ad73cb41782.s2.eu.hivemq.cloud'}
        )

    def connect(self):
        self.MC.connect()

    def publish(self, topic, msg):
        self.MC.publish(topic, msg)


RF = Rfid()

RF.connect()

if __name__ == "__main__":

    reader = MFRC522(spi_id=0, sck=2, miso=4, mosi=3, cs=1, rst=0)

    while True:
        reader.init()
        (stat, tag_type) = reader.request(reader.REQIDL)
        if stat == reader.OK:
            (stat, uid) = reader.SelectTagSN()
            if stat == reader.OK:
                card = int.from_bytes(bytes(uid), "little", False)
                print("CARD ID: "+str(card))
                if card == 423526835:
                    RF.publish(
                        "transfer", "evidence evidence deny donor illegal acquire marble truly table bread ecology memory, 9, 1")
