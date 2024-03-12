const createBtn = (text = 'No text') => {
    const btn = document.createElement('button');
    btn.innerText = text;
    document.body.appendChild(btn);
    return btn;
}
