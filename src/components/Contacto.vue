<template>
  <div>
    <div class="contacto jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading mt-5">Contacto</h1>
        <p class="lead text-muted">Estamos para ayudarte, mandanos cualquier duda o comentario.</p>
        <!-- <p>
          <a href="#" class="btn btn-primary">Main call to action</a>
          <a href="#" class="btn btn-secondary">Secondary action</a>
        </p> -->
      </div>
    </div>
    <section id="contacto">
      <div class="container">
        <div class="form-row justify-content-md-center">
          <form class="col-md-6 col-sm-12">
            <div class="form-row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-user"></i>
                  </div>
                  <input type="text" class="form-control" placeholder="Nombre">
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group input-group">
                  <div class="input-group-addon">@</div>
                  <input type="text" class="form-control" placeholder="Mail">
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <textarea class="form-control" rows="6" placeholder="Tu mensaje"></textarea>
                </div>
              </div>
            </div>
            <button class="btn btn-primary btn-block" type="button">¡Enviar consulta!</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>