import { mount } from '@vue/test-utils'
import Input from './../src/componentes/LvInput.vue'

test('componente sendo inicializado com titulo Nome', () => {
    const wrapper = mount(Input, {
        props: {
            titulo: 'Nome'
        }
    })
    expect(wrapper.find('legend').text()).toEqual('Nome')

})