import { mount } from '@vue/test-utils'
import LvListaNotas from './../src/componentes/LvListaNotas.vue'
import router from '../src/router'
import mockVuex from './mockvuex'

test('lista com 0 elementos', async () => {
    const wrapper = mount(LvListaNotas, {
        global: {
            plugins: [router, mockVuex],
            mocks: {
                emitter: { on: () => { }, emit: () => { } }
            },
        },
    })
    await router.isReady()
    const lista = wrapper.findAll('li')
    expect(lista.length).toEqual(0)
})

test('lista com 2 elementos', async () => {
    const wrapper = mount(LvListaNotas, {
        global: {
            plugins: [router, mockVuex],
            mocks: {
                emitter: { on: () => { }, emit: () => { } }
            },
        },
    })
    await router.isReady()
    await wrapper.setData({
        notas: [
            { conteudo: 'nota 1', id: 1 },
            { conteudo: 'nota 2', id: 2 },
        ]
    })
    const lista = wrapper.findAll('li')
    expect(lista.length).toEqual(2)
})