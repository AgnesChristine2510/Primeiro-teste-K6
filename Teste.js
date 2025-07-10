import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10,           // 10 usuários virtuais
  duration: '30s',   // duração do teste
};

export default function () {
  let res = http.get('https://test.k6.io'); // URL para testar
  check(res, {
    'status é 200': (r) => r.status === 200,
  });
  sleep(1); // espera 1 segundo antes de executar de novo
}