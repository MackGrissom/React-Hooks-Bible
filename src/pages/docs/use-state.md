{% tag %}
Content
{% /tag %}

{% callout %}
Let's look at the **useState** Hook
{% /callout %}

```javascript
import React, { useState } from "react";
const UseStateExample = () => {
  function Counter() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <>
        <h1>{count} times</h1>
        <button onClick={handleClick}>Add 1</button>
      </>
    );
  }
}

export default UseStateExample
```

UseState
