import {Animated, FlatList, View} from "react-native";
import {DataSlide, DataSlide2} from "../../config/Constant";
import {useRef, useState} from "react";
import Pagination from "./Pagination";
import SlideItem from "./SlideItem";

export default function Slider({navigation}) {
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
        setIndex(viewableItems[0].index);
    }).current;

    const viewAbilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;


    return (
        <View>
            <FlatList
                data={DataSlide}
                renderItem={({item}) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewAbilityConfig}
            />
            <Pagination data={DataSlide} scrollX={scrollX} index={index} />
        </View>
    )
};
