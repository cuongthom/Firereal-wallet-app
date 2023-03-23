import {Animated, FlatList, View} from "react-native";
import {DataSlide, DataSlide2} from "../../config/Constant";
import {useRef, useState} from "react";
import Pagination from "./Pagination";
import SlideItem from "./SlideItem";
import SlideItemLocalAuth from "./SlideItemLocalAuth";

export default function LocalAuthSlider({navigation}) {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
        // console.log('viewableItems', viewableItems);
        setIndex(viewableItems[0].index);
    }).current;

    const viewAbilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;


    return (
        <View>
            <FlatList
                data={DataSlide2}
                renderItem={({item}) => <SlideItemLocalAuth item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewAbilityConfig}
            />
            <Pagination data={DataSlide2} scrollX={scrollX} index={index} bottom={100}/>
        </View>
    )
};
