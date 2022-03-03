
typeToSearch = () => {
    let searchText = document.getElementById('search').value;
    document.getElementById('search').value = ''

    const apiKey = `200842c315603475b77fc4a9c72df4ab`
    if (searchText == '') {
        document.getElementById('error').style.display = 'block';
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${apiKey}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayValue(data))
    }

}

const showValue = (id, data) => {

    const display = document.getElementById(id);
    display.innerText = data


}


const displayValue = info => {
    document.getElementById('error').style.display = 'none';
    showValue('city-name', info?.name ? info.name : 'City not found');
    showValue('temperature', info?.main?.temp ? info.main.temp : '00.00');
    showValue('situation', info?.weather[0]?.main);
    console.log(info);
    // for set icon
    const url = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('icon');
    imageIcon.setAttribute('src', url)

}