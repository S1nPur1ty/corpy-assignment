import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TabularDataComponent from '../components/views/TabularDataComponent.vue'
import type { File } from '~/types/general'
import files from '../server/api/mock-data.json'

describe( 'TabularDataComponent', () => {
    let mockData: File[]
    let mocks: any
    let wrapper: any

    beforeEach( () => {
        mockData = files
        mocks = { $t: () => {} }

        wrapper = mount(TabularDataComponent, {
            global: { mocks },
            props: {
                data: mockData
            }
        } )
    } )

    it( 'renders correctly with data from parent', () => {
        expect(wrapper.vm).toBeDefined()
        expect(wrapper.vm.$props.data).toEqual(mockData)
    } )

    it( 'updates the displayed files when searchQuery changes', async () => {
        const searchInput = wrapper.find('input[type="text"]')
        await searchInput.setValue('202303')
        
        expect(wrapper.text()).toContain('関東書店売り上げ動向_202303.csv')
    } )
})