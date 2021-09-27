import { mount } from '@vue/test-utils'
import LvRegistro from './../src/componentes/LvRegistro.vue'
import LvInput from './../src/componentes/LvInput.vue'

test('formulário de registro com mock de ação', async () => {
    const wrapper = mount(LvRegistro, {
        global: {
            components: {
                LvInput
            }
        }
    })

    wrapper.setData({
        usuario: {
            nome: 'Leonardo',
            email: 'leonardo@email.com',
            senha: '12345678'
        }
    })

    wrapper.vm.registrar = function () {
        wrapper.setData({
            estado: 'Carregando...'
        })
    }
    const botao = wrapper.find('input[type=submit]')
    await botao.trigger('click')
    expect(botao.attributes('value')).toEqual('Carregando...')
})