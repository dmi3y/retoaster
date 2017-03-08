# Docs&Examples

## Simple

The [simple][simple] way to use ReToaster as follows:


```jsx
...
<Retoaster
    toasts={toasts}
    removeToast={removeToast}
/>
...
```

Where `toasts` is array of toast objects, and `removeToast` callback function which is called upon toast removal.

Single `toast` object consist of at minimum:

 - `id` is something that can uniquely identify toast, number or string, `+new Date()` or `Math.random()` can be good candidates.
 - `message` is the main information that would be shown as a message.
 - `type` is enum value, one of; success, note, warn or error. Determine visual appearance of the toast itself.

For example `toasts` can be an array like this:

```js
[
    {
        id: 123,
        message: "It's beginning to look a lot like Christmas",
        type: "success"
    },
    {
        id: "asdf",
        message: "Everywhere you go",
        type: "note"
    },
    {
        id: "123asdf",
        message: "Take a look in the five and ten glistening once again",
        type: "warn"
    },
    {
        id: "123",
        message: "With candy canes and silver lanes aglow",
        type: "error"
    }
]
```

This would respectfully render; success, notification, warning and error type of toasts. The success toast automatically closes itself in 3000ms. Note for `id` property, it is unique across toasts and it should stay same during the toast lifecycle. So if it is desired that success message was the same, should `id=123` being passed down to the ReToaster within the toasts array all the time.

The `removeToast` callback takes parameter as a toast itself and thus can remove it from the toasts array like so.

```jsx
...
removeToast () => (toast) => {
    const currentToasts = this.state.toasts
    const newToasts = currentToasts.filter(retoast => retoast.id !== toast.id)
    this.setState({toasts: newToasts})
}
...
```

The one possible example of working component with simple ReToaster usage represented by [`docs/simple-src.js`][simple-src].

## Lazy

One way to customize appearance of the toasts is to override default properties individually.  Such properties as `header`, `icon`, `closeIcon` and `timeout` can be used to override default behavior for only this toast. In such case toasts array may look something like this:

```js
[
    {
        id: 1,
        message: "Rudolph the Red-Nosed Reindeer",
        type: "success",
        timeout: false // this success toast would not be automatically hidden
    },
    {
        id: 2",
        message: "Had a very shiny nose",
        type: "note",
        timeout: 5000, // this note toast will close itself after 5s,
        closeIcon: false // and no user forced close button
    },
    {
        id: 3,
        message: "And if you ever saw it",
        type: "warn",
        header: 'Merry Christmas!' // this warn toast have seasonal greeting header
    },
    {
        id: 4,
        message: "You would even say it glows",
        type: "error",
        icon: "!" // this alert toast have text exclamation sign in place of icon
    }
]
```
There is [working][lazy] demo and it's [component][lazy-src] example implementing this idea.

This is somewhat tedious way to customize toasts and best suited for case by case scenarios.


[simple]: https://dmi3y.github.io/retoaster/simple.html
[simple-src]: simple-src.js
[lazy]: https://dmi3y.github.io/retoaster/lazy.html
[lazy-src]: lazy-src.js
