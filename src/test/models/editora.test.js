import { describe, expect, it, jest } from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testando o modelo Editora', () => {
    const objetoEditora = {
        nome: 'Casa do Código',
        cidade: 'São Paulo',
        email: 'cdc@cdc.com'
    };

    it('Deve instanciar uma nova Editora', () => {
        const editora = new Editora(objetoEditora);
        expect(editora).toEqual(expect.objectContaining(objetoEditora));
    });

    it.skip('Deve salvar editora no BD', () => {
        const editora = new Editora(objetoEditora);
        editora.salvar().then((dados) => {
            expect(dados.nome).toBe('CDC');
        });
    });

    it('Deve salvar no BD usando a sintaxe moderna', async () => {
        const editora = new Editora(objetoEditora);

        const dados = await editora.salvar();

        const retornado = await Editora.pegarPeloId(dados.id);

        expect(retornado).toEqual(expect.objectContaining({
            id: expect.any(Number),
            ...objetoEditora,
             created_at: expect.any(String),
             update_at: expect.any(String),
            }));
    });
});