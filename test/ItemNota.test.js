import { mount } from '@vue/test-utils'
import LvItemNota from './../src/componentes/LvItemNota.vue'
import router from '../src/router'

test('iniciando item da lista', async () => {
    const wrapper = mount(LvItemNota, {
        props: {
            nota: { conteudo: 'academia', id: 4 }
        },
        global: {
            plugins: [router]
        }
    })
    await router.isReady()
    const titulo = wrapper.find('span')
    expect(titulo.text()).toEqual('academia')
})

