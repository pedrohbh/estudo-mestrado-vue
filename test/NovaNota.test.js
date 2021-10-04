import { mount } from '@vue/test-utils'
import LvNovaNota from './../src/componentes/LvNovaNota.vue'
import LvInput from './../src/componentes/LvInput.vue'
import router from '../src/router'

test('formulário de criação com mock em ação', async () => {
    const wrapper = mount(LvNovaNota, {
        global: {
            components: {
                LvInput
            },
            plugins: [router],
            mocks: {
                emitter: { on: () => {}, emit: () => {}}
            },
        },
    })
    await router.isReady()

    wrapper.setData({
        conteudo: 'Ir ao mercado'
    })

    wrapper.vm.criar = function() {
        wrapper.setData({
        estado: 'Carregando...'
        })
    }

    const botao = wrapper.find('input[type=submit]')
    await botao.trigger('click')

    expect(botao.attributes('value')).toEqual('Carregando...')
})