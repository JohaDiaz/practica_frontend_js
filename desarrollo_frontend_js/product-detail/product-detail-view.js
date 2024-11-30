export function buildProductDetail(product) {

  return `
                <div class="container mt-3">
                  <div class="row">
                    <div class="col-md-12 col-xl-12">
                      <div class="card shadow-0 border rounded-3">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                              <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                <img src="https://via.placeholder.com/240x240/5fa9f8/efefef" class="img-fluid mx-auto d-block" alt="Card image cap">
                                <a href="#!">
                                  <div class="hover-overlay">
                                    <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-6">
                              <h5>${product.productName}</h5>
                              <p class="text-truncate mb-4 mb-md-0">
                              ${product.productDescription}
                               </p>
                         
                              <div class="mt-1 mb-0 text-muted small">
                                <input class="btn btn-primary btn-sm" type="button" value="Input">
                                <input class="btn btn-primary btn-sm" type="button" value="Input">
                                <input class="btn btn-primary btn-sm" type="button" value="Input">
                                <input class="btn btn-primary btn-sm" type="button" value="Input">
                              </div>
                              
                            </div>
                            <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div class="d-flex flex-row align-items-center mb-1">
                                <h4 class="mb-1 me-1">${product.productPrice}€</h4>
                              </div>
                              <h6 class="text-success">Oferta Especial</h6>
                              <p class="text-success">Haz click en el anuncio para ver el detalle.</p>
                              <div class="button-delete d-flex flex-column mt-5">
                             
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

`
}

export function buildDeleteButton() {

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-primary');
  removeButton.textContent = "Borrar";



  return removeButton;
}
