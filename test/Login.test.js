import { mount } from '@vue/test-utils'
import LvLogin from './../src/componentes/LvLogin.vue'
import LvInput from './../src/componentes/LvInput.vue'
import router from '../src/router'


test('formulário de login com mock de ação', async () => {
    const wrapper = mount(LvLogin, {
        global: {
            components: {
                LvInput
            },
            plugins: [router]
        }
    })
    await router.isReady()

    wrapper.setData({
        usuario: {
            email: 'leonardo@email.com',
            senha: '12345678'
        },
    })

    wrapper.vm.logar = function() {
        wrapper.setData({
            estado: 'Carregando...'
        })
    }

    const botao = wrapper.find('input[type=submit]')
    await botao.trigger('click')

    expect(botao.attributes('value')).toEqual('Carregando...')

})