import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProductCard from '../components/ProductCard.vue';

describe('ProductCard', () => {
  const mockProduct = {
    id: 'test-1',
    name: 'Test Product',
    category: 'Test Category',
    description: 'Test description',
    image: '/test.jpg',
    specifications: ['Spec 1', 'Spec 2'],
  };

  it('renders product information correctly', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
      },
    });

    expect(wrapper.text()).toContain('Test Product');
    expect(wrapper.text()).toContain('Test Category');
    expect(wrapper.text()).toContain('Test description');
  });

  it('displays all specifications', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
      },
    });

    expect(wrapper.text()).toContain('Spec 1');
    expect(wrapper.text()).toContain('Spec 2');
  });

  it('renders product image with correct attributes', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
      },
    });

    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('/test.jpg');
    expect(img.attributes('alt')).toBe('Test Product');
  });
});
