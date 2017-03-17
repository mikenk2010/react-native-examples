### USAGE
1. Init passProps in initialRoute

```
{title: 'Scene1', index: 0, passProps: {}}
```

2. Set value to passProps

```
navigator.push({
  passProps: {
    movieId: this.state.inputText
  },
  index: 1
})
```

3. Attach value when renderScene, in this case is `dataMovieId={route.passProps.movieId}`

```
<DetailPage dataMovieId={route.passProps.movieId} navigator={navigator} />
```

4. Get value in Detail page `dataMovieId` as step 3

```
{this.props.dataMovieId}
```

### DEMO
![Image](http://imgur.com/a/ncrqC)
