package com.example.demo.utile;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.KeyPairGeneratorSpi;

public class KeyGeneratorUtility {

    public static KeyPair generateRsaKey(){
        KeyPair keyPair;

        try{
            KeyPairGenerator keyPairGenerator =KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(2048);
            keyPair = keyPairGenerator.generateKeyPair();
        } catch(Exception e){
            throw new IllegalStateException();
        }

        return keyPair;
    }
}
