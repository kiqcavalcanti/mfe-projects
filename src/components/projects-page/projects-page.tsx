import { Component, h } from '@stencil/core';

@Component({
  tag: 'projects-page',
  styleUrl: './../tailwind.component.css',
  shadow: true,
})
export class ProjectsPage {
  render() {
    return (
      <div class="bg-gray-100 p-4">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-2xl font-bold mb-4">Lista de Projetos</h1>

          <table class="min-w-full bg-white rounded-lg overflow-hidden">
            <thead class="bg-gray-200 text-gray-700">
            <tr>
              <th class="py-2 px-4 text-left">Projeto</th>
              <th class="py-2 px-4 text-left">Progresso</th>
              <th class="py-2 px-4 text-left">Status</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="py-2 px-4">Projeto A</td>
              <td class="py-2 px-4">70%</td>
              <td class="py-2 px-4">Em andamento</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Projeto B</td>
              <td class="py-2 px-4">100%</td>
              <td class="py-2 px-4">Concluído</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Projeto C</td>
              <td class="py-2 px-4">40%</td>
              <td class="py-2 px-4">Em andamento</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Projeto D</td>
              <td class="py-2 px-4">90%</td>
              <td class="py-2 px-4">Em andamento</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
