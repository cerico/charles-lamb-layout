# Charles Lamb Layout

## TLDR / What is it?

A Layout, with header and navbar

## How Do I use it?

### Install

```
➜  yesmate git:(dev) npm i charles-lamb-layout
```

### Import

Import into your main react component

```
import Layout from 'charles-lamb-layout';
```

### Include

Include in your main react component and pass it the links you want displayed and a colour scheme, eg 

```
const links = [
      {path:'/',title:"home",key:1},
      {path:'/checkout',title:"checkout",key:2}
      ]
const scheme = {
      bg: 'rgb(246, 235, 213)',
      fg: '#253248',
      font: 'raleway'
    }
<Layout links={links}/>
```

### In context

eg with a router, in main App.js

```
  const links = [
      {path:'/',title:"home",key:1},
      {path:'/checkout',title:"checkout",key:2}
      ]
  const scheme = {
      bg: 'rgb(246, 235, 213)',
      fg: '#253248',
      font: 'raleway'
    }

    return (
      <Router>
        <main>
          <Layout scheme={scheme} links={links}/>
          <div>
            <Switch>
              <Route exact path="/"  component={Products}/>
              <Route path="/products/:id" component={Product} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </main>
      </Router>
    );
```
