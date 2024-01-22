## React.memo:
<p>React.memo, bir React bileşenini memoize etmek (bellekte saklamak) için kullanılır. Bu, bir bileşenin geçmiş render sonuçlarını hatırlamasını sağlayarak gereksiz yeniden render işlemlerini önler. Bunu yaparak, eğer bileşenin girişleri (props) önceki render ile aynı ise, bileşen tekrar render edilmez ve önceki sonuçları kullanılır.</p>

## useCallback:
<p>useCallback, bir fonksiyonu memoize etmek ve bu fonksiyonun sadece bağımlılıkları değiştiğinde tekrar oluşturulmasını sağlamak için kullanılır. Bu özellikle, bir parent bileşenin çocuk bileşenlere fonksiyonlar geçirdiği durumlarda yararlıdır.</p>

<p>useCallback kullanarak, fonksiyonun her render sırasında tekrar oluşturulmasını önleyebilir ve bu sayede gereksiz render işlemlerini azaltabilirsiniz. Bağımlılık dizisi, hangi değişkenlerin değiştiğinde fonksiyonun yeniden oluşturulacağını belirtir.
</p>