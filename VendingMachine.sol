//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract OtomatMakina{

    struct purchase{

        uint urun_no;
        uint urun_index;
    }

    struct UrunList{
        string urun;
        uint urun_stok;
    }

uint public toplam_urun_sayisi = 0;

mapping(address => purchase) SatinAlma;

UrunList[] public urun_listler;

function urun_ekle(string memory _urunAdi, uint _urunStok) public {
    urun_listler.push(UrunList({
        urun: _urunAdi, 
        urun_stok: _urunStok
        }));
        toplam_urun_sayisi+=1;
}

function urun_isim(uint urun_no) public view returns(string memory urun_adi){
    return urun_listler[urun_no].urun;
}
function urun_stok(uint urun_stok_id) public view returns(uint urun_stok_no){
    return urun_listler[urun_stok_id].urun_stok;
}
function satinAl(uint urun_num, uint alma_sayi ) public {
    purchase storage sender = SatinAlma[msg.sender];
    sender.urun_index = toplam_urun_sayisi;
    urun_listler[urun_num].urun_stok -= alma_sayi;
}
function urun_stok_ekle(uint urun_id ,uint stok_sayi) public {
    
    urun_listler[urun_id].urun_stok += stok_sayi;
}
}

