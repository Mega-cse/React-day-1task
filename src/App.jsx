import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
 
  render() {
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">            
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1>React Price card task</h1>
                   </div>
              </div>
            </header>
            <div class="row text-center align-items-end">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Free</h1>
                  <h2 class="h1 font-weight-bold">$0/month<span class="text-small font-weight-normal ml-2"></span></h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Single User</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>50GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Unlimited Private Projects</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Dedicated Phone support</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Free Subdomain</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Monthly Status Reports</del>
                    </li>
                  </ul>
                  <a href="#" class="button">Button</a>
                </div>
              </div>
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Plus</h1>
                  <h2 class="h1 font-weight-bold">$9/month<span class="text-small font-weight-normal ml-2"></span></h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>5 Users</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited Private Projects</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Dedicated Phone support</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Free Subdomain</li>
                    
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Monthly Status Reports</del>
                    </li>
                  </ul>
                  <a href="#" class="button">Button</a>
                </div>
              </div>
             
              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                  <h2 class="h1 font-weight-bold">$49/month<span class="text-small font-weight-normal ml-2"></span></h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Users</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Acces</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Private Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated Phone support</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Free Subdomain</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Monthly Status Reports</li>
                  </ul>
                  <a href="#" class="button" >Button</a>
                </div>
              </div>
             

            </div>
          </div>
        </section>

      </div>
     
      
)
};
}

export default Home;