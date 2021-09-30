import { mount } from '@vue/test-utils'
import LvPainel from './../src/componentes/LvPainel.vue'
import router from '../src/router'
import mockVuex from './mockvuex'

test('verificando nome no painel', async () => {
    const wrapper = mount(LvPainel, {
        global: {
            plugins: [router, mockVuex],
            mocks: {
                emitter: { on: () => { }, emit: () => { } }
            },
        }
    })
    await router.isReady()
    const span = wrapper.find('span')
    expect(span.text()).toEqual('Painel logado com Leonardo')
})

test('saindo do sistema com mock, verificando se botão está lá',
    async () => {
        const wrapper = mount(LvPainel, {
            global: {
                plugins: [router, mockVuex],
                mocks: {
                    emitter: { on: () => { }, emit: () => { } }
                },
            }
        })
        let acao = ''
        wrapper.vm.sair = function () {
            acao = 'saiu'
        }
        const botao = wrapper.find('button')
        await botao.trigger('click')
        expect(acao).toEqual('saiu')
})