import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';



export default function lat_OH() {
    return (
    <ScrollView>
        <View style={{ flex: 1, padding:20}}>
            {/* Header */}
                <View style={{backgroundColor:'#C67ACE', height: 150, borderRadius: 10, padding:20, justifyContent:'space-between'}} >
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',  }}>
                                <Icon2 name="arrow-left" size={20} color="#fff"/>
                                <Icon3 name="wallet" size={20} color="#fff"/>
                            </View>
                            <Text style={{ marginLeft:10, fontSize: 20, color: 'black', fontWeight:'bold', flexDirection:'row', justifyContent:'space-between'}}>
                                gopay
                            </Text>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Icon3 name="dots-three-horizontal" size={20} color="#fff"/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={{backgroundColor: '#fff', width:50, height:50, borderRadius:90,}}>  
                        <Image 
                            style={{width:50, height:50, borderRadius:30}}
                            source={require('./man-icon.jpg')}
                        />               
                        </View>
                        <View style={{justifyContent:'center', marginLeft: 20,}}>
                        <Text style={{fontWeight:'bold', fontSize:20, color:'#fff'}}>Don Ario Rafly</Text>
                        <Text style={{fontSize:12, color:'#fff'}}>Tap to see your gopay profile</Text>
                        </View>
                    </View>
                </View>
                {/* Body */}
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                    <View>
                        <View style={{width:60, height:60, backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon4 name="arrow-up-box" size={30} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>Pay</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{width:60, height:60, backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon4 name="plus-box" size={30} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>Top Up</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{width:60, height:60, backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon4 name="arrow-down-box" size={30} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>Request</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{width:60, height:60, backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon name="plus-square" size={30} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>PayLater</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                    <View>
                        <View style={{width:60, height:60, backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon1 name="hand-holding-usd" size={30} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>Cash Out</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{width:60, height:60, flexDirection:'row', backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon3 name="wallet" size={17} color="#fff"/>
                            <Icon3 name="plus" size={17} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>Plus</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{width:60, height:60, backgroundColor:'#C67ACE', marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>
                            <Icon5 name="article" size={30} color="#fff"/>                
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:14 }}>Tagihan</Text>
                        </View>
                    </View>
                        <View style={{width:60, height:60,  marginTop: 20, borderRadius:90, justifyContent:'center', alignItems:'center'}}>                
                    </View>
                </View>
                


                <View style={{backgroundColor:'#FFF', height: 180, borderRadius: 10, padding:20, justifyContent:'space-between', marginTop: 30, borderWidth: 1, borderColor: 'navy'}} >
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column', alignItems: 'flex-start', justifyContent:'space-between',  }}>
                                <Text style={{fontWeight:'bold', fontSize:18, color:'#000'}}>GoPay friends</Text>
                                <Text style={{fontWeight:'normal', fontSize:10, color:'#000'}}>These are who you last sent or requested GoPay to.</Text>
                                <Text style={{fontWeight:'normal', fontSize:10, color:'#000'}}>Tap their name to send again.</Text>
                            </View>                        
                        </View>
                        <View style={{alignContent:'flex-end', justifyContent:'flex-end'}}>
                            <Text style={{fontWeight:'bold', fontSize:12, color: 'green'}}> See More</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingTop:10}}>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                        <View style={{backgroundColor: 'lightgrey', width:60, height:60, borderRadius:90, margin: 5 }}> 
                            <Image 
                            style={{width:60, height:60, borderRadius:30}}
                            source={require('./man-icon.jpg')}
                            />                                         
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:14}}>Farrel</Text>
                        </View>
                        </View>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                        <View style={{backgroundColor: 'lightgrey', width:60, height:60, borderRadius:90, margin: 5 }}>      
                            <Image 
                            style={{width:60, height:60, borderRadius:30}}
                            source={require('./man-icon.jpg')}
                            />                                    
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:14}}>Jasmine</Text>
                        </View>
                        </View>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                        <View style={{backgroundColor: 'lightgrey', width:60, height:60, borderRadius:90, margin: 5 }}>   
                            <Image 
                            style={{width:60, height:60, borderRadius:30}}
                            source={require('./man-icon.jpg')}
                            />                                       
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:14}}>Green Tea</Text>
                        </View>
                        </View>                    
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={{paddingTop:20, paddingBottom:10, fontWeight:'bold', color:'navy'}}>History</Text>
                    </View>
                    <View style={{ height: 80, justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'lightgrey'}} >
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>                  
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignContent:'space-between'}}>
                                <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',color: 'black'}}>GoPay top Up First Item</Text>
                                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue'}}>#2093774218741827</Text>
                                    <Text style={{color:'grey', fontSize:14}}>9 Apr, 9.30 PM</Text>
                                </View>
                            </View> 
                                <View style={{flexDirection:'row', alignContent:'flex-end'}}>
                                <Text style={{justifyContent:'flex-start', fontSize: 13, color: 'green',fontWeight: 'bold', alignContent:'flex-start'}}>Rp</Text>             
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green' }}>51.000</Text>             
                                </View>                       
                        </View>
                        
                    </View>
                    <View style={{ height: 80, justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'lightgrey'}} >
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>                  
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignContent:'space-between'}}>
                                <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',color: 'black'}}>GoPay top Up First Item</Text>
                                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue'}}>#2093774218741827</Text>
                                    <Text style={{color:'grey', fontSize:14}}>9 Apr, 9.30 PM</Text>
                                </View>
                            </View> 
                                <View style={{flexDirection:'row', alignContent:'flex-end'}}>
                                <Text style={{justifyContent:'flex-start', fontSize: 13, color: 'green',fontWeight: 'bold', alignContent:'flex-start'}}>Rp</Text>             
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green' }}>51.000</Text>             
                                </View>                       
                        </View>
                        
                    </View>
                    <View style={{ height: 80, justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'lightgrey'}} >
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>                  
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignContent:'space-between'}}>
                                <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',color: 'black'}}>GoPay top Up First Item</Text>
                                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue'}}>#2093774218741827</Text>
                                    <Text style={{color:'grey', fontSize:14}}>9 Apr, 9.30 PM</Text>
                                </View>
                            </View> 
                                <View style={{flexDirection:'row', alignContent:'flex-end'}}>
                                <Text style={{justifyContent:'flex-start', fontSize: 13, color: 'green',fontWeight: 'bold', alignContent:'flex-start'}}>Rp</Text>             
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green' }}>51.000</Text>             
                                </View>                       
                        </View>
                        
                    </View>
                    <View style={{ height: 80, justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'lightgrey'}} >
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>                  
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignContent:'space-between'}}>
                                <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',color: 'black'}}>GoPay top Up First Item</Text>
                                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue'}}>#2093774218741827</Text>
                                    <Text style={{color:'grey', fontSize:14}}>9 Apr, 9.30 PM</Text>
                                </View>
                            </View> 
                                <View style={{flexDirection:'row', alignContent:'flex-end'}}>
                                <Text style={{justifyContent:'flex-start', fontSize: 13, color: 'green',fontWeight: 'bold', alignContent:'flex-start'}}>Rp</Text>             
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green' }}>51.000</Text>             
                                </View>                       
                        </View>
                        
                    </View>
                    <View style={{ height: 80, justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'lightgrey'}} >
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>                  
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignContent:'space-between'}}>
                                <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',color: 'black'}}>GoPay top Up First Item</Text>
                                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue'}}>#2093774218741827</Text>
                                    <Text style={{color:'grey', fontSize:14}}>9 Apr, 9.30 PM</Text>
                                </View>
                            </View> 
                                <View style={{flexDirection:'row', alignContent:'flex-end'}}>
                                <Text style={{justifyContent:'flex-start', fontSize: 13, color: 'green',fontWeight: 'bold', alignContent:'flex-start'}}>Rp</Text>             
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green' }}>51.000</Text>             
                                </View>                       
                        </View>
                        
                    </View>
                    <View style={{ height: 80, justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'lightgrey'}} >
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>                  
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignContent:'space-between'}}>
                                <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',color: 'black'}}>GoPay top Up First Item</Text>
                                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue'}}>#2093774218741827</Text>
                                    <Text style={{color:'grey', fontSize:14}}>9 Apr, 9.30 PM</Text>
                                </View>
                            </View> 
                                <View style={{flexDirection:'row', alignContent:'flex-end'}}>
                                <Text style={{justifyContent:'flex-start', fontSize: 13, color: 'green',fontWeight: 'bold', alignContent:'flex-start'}}>Rp</Text>             
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green' }}>51.000</Text>             
                                </View>                       
                        </View>
                        
                    </View>
            
                </View>

        </View>
    </ScrollView>
    )
}


