<template>
    <br>
    <hr>
    <h2>Baraa Store</h2>
    <hr>
    
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Help
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <ul class="list-unstyled" style="text-align: left;padding-left: 15px;">
                    <li>Our Client Advisors are available to assist you by phone at +1.866.VUITTON . You can also chat or email us</li>
                    <li>FAQs</li>
                    <li>Product Care</li>
                    <li>Stores</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                Services
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <ul class="list-unstyled" style="text-align: left;padding-left: 15px;">
                    <li>Repairs</li>
                    <li>Personalization</li>
                    <li>Art of Gifting</li>
                    <li>Download our Apps</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                Connect
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <ul class="list-unstyled" style="text-align: left;padding-left: 15px;">
                    <li><a href="">Sign up</a> for the latest news from the Maison, including exclusive online pre-launches for new collections</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FooterComponent',
}
</script>

<style>
.accordion-button:not(.collapsed){
    color: black;
    background-color: white;
    box-shadow: none;
}
li{
    padding: 5px;
    cursor: pointer;
}

</style>