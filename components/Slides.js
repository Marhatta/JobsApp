import React , {Component} from 'react';
import {View,Text,ScrollView,Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Slides extends Component {

renderLastSlide(index){
  if(index === this.props.data.length - 1){
    return (
      <View style={styles.buttonStyle}>
        <Button
        title='Onwards!'
        raised
        onPress={this.props.onComplete}
        />
      </View>
    );
  }
}

renderSlides(){
  return this.props.data.map((slide,index)=>{
    return(
      <View
        style={[styles.slideStyle,{backgroundColor:slide.color}]}
        key={slide.text}
      >
        <Text style={styles.textStyle}> {slide.text} </Text>
        {this.renderLastSlide(index)}
      </View>
    );
  });
}

  render(){
    return (
      <ScrollView
        horizontal
        style={{flex:1}}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}


const styles = {
  slideStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:SCREEN_WIDTH
  },
  textStyle:{
    fontSize:30,
    color:'whitesmoke',
    textAlign:'center'

  },
  buttonStyle:{
    marginTop:15
  }
};

export default Slides;
