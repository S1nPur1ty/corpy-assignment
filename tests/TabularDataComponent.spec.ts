import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TabularDataComponent from '@/components/dashboard/TabularDataComponent.vue';


describe('TabularDataComponent', () => {
    it('renders correctly with initial data', () => {
        const testData = {
            // ...some mock data that your component expects
        };

        const wrapper = mount(TabularDataComponent, {
            props: { data: testData }
        });

        // Assertions to check if the component renders correctly with initial data
        expect(wrapper.text()).toContain('...'); // Replace with actual text/content checks
    });

    it('updates the displayed files when searchQuery changes', async () => {
        const testData = {
            // ...some mock data including file names
        };

        const wrapper = mount(TabularDataComponent, {
            props: { data: testData }
        });

        // Simulate input in the search box
        const searchInput = wrapper.find('input[type="text"]');
        await searchInput.setValue('search term');
        
        // Assertions to check if the displayed files are filtered based on the search term
        expect(wrapper.text()).toContain('...'); // Replace with checks for filtered results
    });

    // Additional tests can be written for button clicks and other interactions
});