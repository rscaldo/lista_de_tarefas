$(document).ready(function () {
  $("#lista-tarefas li").on("click", function () {
    $(this).toggleClass("tarefa-concluida");
  });
  $("form").submit(function (e) {
    e.preventDefault();

    const novaTarefa = $("#nova-tarefa").val();
    //CRIAMOS UM NOVO ELEMENTO NO JQUERY
    // const novaPendencia = $(`<li>${novaTarefa}</li>`);
    //AGORA PRECISAMOS ADICONAR NO HTML, ADICIONAMOS O COMANDO .appendTo(), E DENTRO DOS PARENTESES COLOCAMOS O ELEMENTO DE DESTINO
    const novaPendencia = $(`<li>${novaTarefa}</li>`);
    novaPendencia.appendTo("#lista-tarefas");

    // Limpar o campo de entrada
    $("#nova-tarefa").val("");

    // Adicionar evento de clique ao elemento recém-criado <li>
    novaPendencia.on("click", function () {
      $(this).toggleClass("tarefa-concluida");
    });
  });
});
