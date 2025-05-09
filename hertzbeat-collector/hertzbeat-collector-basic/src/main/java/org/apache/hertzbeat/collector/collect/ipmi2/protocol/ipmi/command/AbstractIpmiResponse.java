/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hertzbeat.collector.collect.ipmi2.protocol.ipmi.command;

import java.nio.ByteBuffer;
import org.apache.hertzbeat.collector.collect.ipmi2.client.IpmiPacketContext;
import org.apache.hertzbeat.collector.collect.ipmi2.protocol.common.IpmiCode;
import org.apache.hertzbeat.collector.collect.ipmi2.protocol.ipmi.IpmiCompletionCode;

/**
 *  Abstract class for IPMI command response
 */
public abstract class AbstractIpmiResponse extends AbstractIpmiCommand implements IpmiResponse {

    public IpmiCompletionCode completionCode;

    @Override
    public void toWireData(IpmiPacketContext context, ByteBuffer buffer) {
        throw new UnsupportedOperationException("Not implemented");
    }

    @Override
    public void fromWireData(IpmiPacketContext context, ByteBuffer buffer) {
        completionCode = IpmiCode.fromByte(IpmiCompletionCode.class, buffer.get());
        fromResponseData(context, buffer);
    }

    @Override
    public int getDataWireLength(IpmiPacketContext context) {
        return 0;
    }

    public abstract void fromResponseData(IpmiPacketContext context, ByteBuffer buffer);

}
