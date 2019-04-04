<template>
  <div class="text-center corpo" style="padding-bottom:2em">
    <img src="statics/forbiden.jpeg" alt="">
    <h2>Você não tem permissão para acessar.</h2>
    <h3>Envie um e-mail solicitando acesso para froeder3@gmail.com</h3>
    <q-btn color="info" icon="arrow_back_ios" to="/auth/sign-in">Voltar</q-btn>
  </div>
</template>

<script>
import { uid, Notify, date } from "quasar";

export default {
  data() {
    return {
      log: {},
      dispositivo: {}
    };
  },
  methods: {
    geraId() {
      this.log.id = uid();
    },
    pegaHoraAtual() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(
        timeStamp,
        "DD-MM-YYYYTHH:mm:ss.SSSZ"
      );
      this.log.hora = formattedString;
    },
    pegaDispositivo() {
      let platform = this.$q.platform.is;
      this.dispositivo.plataforma = platform.platform;
      this.dispositivo.nome = platform.name;
      this.dispositivo.versao = platform.version;

      //Atribui Plataforma ao objeto
      this.log.dispositivo = this.dispositivo;
    },
    pegaIp() {
      function getUserIP(onNewIP) {
        //  onNewIp - your listener function for new IPs
        //compatibility for firefox and chrome
        var myPeerConnection =
          window.RTCPeerConnection ||
          window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection;
        var pc = new myPeerConnection({
            iceServers: []
          }),
          noop = function() {},
          localIPs = {},
          ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
          key;

        function iterateIP(ip) {
          if (!localIPs[ip]) onNewIP(ip);
          localIPs[ip] = true;
        }

        //create a bogus data channel
        pc.createDataChannel("");

        // create offer and set local description
        pc.createOffer(function(sdp) {
          sdp.sdp.split("\n").forEach(function(line) {
            if (line.indexOf("candidate") < 0) return;
            line.match(ipRegex).forEach(iterateIP);
          });

          pc.setLocalDescription(sdp, noop, noop);
        }, noop);

        //listen for candidate events
        pc.onicecandidate = function(ice) {
          if (
            !ice ||
            !ice.candidate ||
            !ice.candidate.candidate ||
            !ice.candidate.candidate.match(ipRegex)
          )
            return;
          ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
      }

      // Usage

      getUserIP(function(ip) {
        let self = this
        self.log.ip = ip
        console.log(self.log)
      });
    },
    loga() {
      this.pegaHoraAtual();
      this.pegaDispositivo();
      this.pegaIp()
    },
    salvaBanco() {
      this.loga();
      let collection = this.$firebase.firestore().collection("logs");
      collection.add(this.log);
    }
  },
  mounted() {
    this.salvaBanco()
  }
};
</script>

<style scoped>
.corpo {
  background-color: black;
  color: yellow;
  font-family: Charmonman;
}
.q-icon {
  color: red;
  font-size: 15em;
}
</style>
