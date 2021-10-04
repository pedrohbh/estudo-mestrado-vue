import {http} from './configuracao'

export default {
    criar: ({ conteudo, usuario_id }) => {
        return http.post('notas', { conteudo, usuario_id });
    },
}