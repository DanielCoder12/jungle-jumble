export const MainJumbleView = /*html*/`
 <div class="container-fluid">
      <section class="row">
        <div class="col-12 col-md-3 p-5 ">
          <div class="rounded header-shadows p-3">
            <h1 class="text-center">Jungle Jumble</h1>
          </div>
        </div>
      </section>

      <section class="row">
        <div class="col-8">
        <div id="startJumble"></div>
        </div>
        <div class="col-3">
          <div>
            <div class="jumble-shadow rounded">
              <h2 class="text-center">Jumbles!</h2>
             <div id="insertJumble"></div>
              <p class="text-center pt-5">Create Jumbles</p>
              <form onsubmit="app.JumblesController.createNewJumble(event)">
              
              <div class="form-outline mb-4">
              <label for="name" class="form-label" placeholder="Name" for="name">name</label>
                <input name="name" type="text" id="name" class="form-control" />
              </div>
        
        
            
              <div class="form-outline mb-4">
              <label class="form-label" for="text" placeholder="Jumble">jumble</label>
                <textarea name="text" class="form-control" id="text" rows="4"></textarea>
              </div>
        
             
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Create
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

    </div>
`